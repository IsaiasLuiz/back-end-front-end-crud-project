package com.project.crud.service;

import com.project.crud.model.Category;
import com.project.crud.model.Course;
import com.project.crud.model.exception.CategoryNotFoundException;
import com.project.crud.model.exception.CourseNotFoundException;
import com.project.crud.model.exception.ExistingCourseSamePeriod;
import com.project.crud.model.exception.InvalidCoursePeriod;
import com.project.crud.model.request.CourseRequest;
import com.project.crud.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private CategoryService categoryService;


    public void save(final CourseRequest courseRequest) throws CategoryNotFoundException, ExistingCourseSamePeriod, InvalidCoursePeriod {
        final LocalDate date = LocalDate.now().minusDays(1);
        if(!courseRequest.getStartDate().isAfter(date) || !courseRequest.getStartDate().isAfter(date)) {
            throw new InvalidCoursePeriod("Datas não podem ser inferiores a data atual!");
        } else if(courseRequest.getStartDate().isAfter(courseRequest.getFinalDate())) {
            throw new InvalidCoursePeriod("Não é permitido que a data inicial seja depois da data final!");
        }

        final Course course = courseRepository.findByStartDateAndFinalDate(courseRequest.getStartDate(), courseRequest.getFinalDate());

        if(course != null) {
            throw new ExistingCourseSamePeriod("Existem cursos planejados dentro do período informado!");
        }

        final Course newCourse = buildCourse(courseRequest);

        courseRepository.save(newCourse);
    }

    public List<Course> findAllCourses(){
        return courseRepository.findAll();
    }

    public Course findCourseById(final Long id) throws CourseNotFoundException {
        final Optional<Course> eventOptional = courseRepository.findById(id);
        validateIfCourseExists(eventOptional);
        return eventOptional.get();
    }

    public void update(CourseRequest courseRequest) throws CourseNotFoundException, CategoryNotFoundException {
        final Optional<Course> courseOptional = courseRepository.findById(courseRequest.getId());
        validateIfCourseExists(courseOptional);
        final Course course = buildCourse(courseRequest);
        course.setId(courseRequest.getId());
        courseRepository.save(course);
    }

    public void deleteById(final Long id) throws CourseNotFoundException {
        final Optional<Course> courseOptional = courseRepository.findById(id);
        validateIfCourseExists(courseOptional);
        courseRepository.deleteById(id);
    }

    public List<Course> findByDescription(String description) {
        return courseRepository.findByDescriptionIgnoreCase(description);
    }

    private Course buildCourse(final CourseRequest courseRequest) throws CategoryNotFoundException {
        return Course.builder()
                .description(courseRequest.getDescription())
                .amount(courseRequest.getAmount())
                .startDate(courseRequest.getStartDate())
                .finalDate(courseRequest.getFinalDate())
                .category(findCategoryById(courseRequest.getCategoryId()))
                .build();
    }


    private boolean validateIfCourseExists(final Optional<Course> courseOptional) throws CourseNotFoundException {
        if(courseOptional.isPresent()) {
            return true;
        } else {
            throw new CourseNotFoundException("Curso não existe!");
        }
    }

    private Category findCategoryById(final Long id) throws CategoryNotFoundException {
        return categoryService.findById(id);
    }
}
