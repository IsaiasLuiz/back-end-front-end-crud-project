package com.project.crud.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@SequenceGenerator(name = "categories_id_sequence", initialValue = 1, allocationSize = 1)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "categories")
@Builder
@Data
public class Category {

    @GeneratedValue(strategy = GenerationType.AUTO, generator = "categories_id_sequence")
    @Column(name = "category_id")
    @Id
    private Long code;

    @Column(name = "description")
    @NotBlank
    private String description;

}
