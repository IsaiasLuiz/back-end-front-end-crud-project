package com.project.crud.repository;

import com.project.crud.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

    Course findByStartDateAndFinalDate(final LocalDate startDate, final LocalDate finalDate);

    @Query("select c from courses c where upper(c.description) like '%' || upper(?1) || '%' ")
    List<Course> findByDescriptionIgnoreCase(final String description);

}
