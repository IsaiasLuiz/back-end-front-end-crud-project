package com.project.crud.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@SequenceGenerator(name = "courses_id_sequence", initialValue = 1, allocationSize = 1)
@Entity(name = "courses")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public  class Course {

    @GeneratedValue(strategy = GenerationType.AUTO, generator = "courses_id_sequence")
    @Column(name = "course_id")
    @Id
    protected Long id;

    @Column(name = "description")
    @NotBlank
    protected String description;

    @Column(name = "amount")
    protected int amount;

    @Column(name = "start_date")
    @NotNull
    private LocalDate startDate;

    @Column(name = "final_date")
    @NotNull
    private LocalDate finalDate;

    @JoinColumn(name = "category", referencedColumnName = "category_id")
    @OneToOne
    protected Category category;

}
