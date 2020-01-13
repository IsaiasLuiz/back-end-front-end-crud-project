package com.project.crud.controller;


import com.project.crud.model.Course;
import com.project.crud.model.exception.CategoryNotFoundException;
import com.project.crud.model.exception.CourseNotFoundException;
import com.project.crud.model.exception.ExistingCourseSamePeriod;
import com.project.crud.model.exception.InvalidCoursePeriod;
import com.project.crud.model.request.CourseRequest;
import com.project.crud.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @PostMapping
    public void save(@RequestBody final CourseRequest courseRequest) throws CategoryNotFoundException, ExistingCourseSamePeriod, InvalidCoursePeriod {
        courseService.save(courseRequest);
    }

    @GetMapping
    public List<Course> searchAll() {
        return courseService.findAllCourses();
    }

    @GetMapping("/{id}")
    public Course searchById(@PathVariable final Long id) throws CourseNotFoundException {
        return courseService.findCourseById(id);
    }

    @GetMapping("/search")
    public List<Course> searchByDescription(@RequestParam final String description) {
        return courseService.findByDescription(description);
    }

    @PutMapping
    public void update(@RequestBody final CourseRequest courseRequest) throws CourseNotFoundException, CategoryNotFoundException {
        courseService.update(courseRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable final Long id) throws CourseNotFoundException {
        courseService.deleteById(id);
    }

}
