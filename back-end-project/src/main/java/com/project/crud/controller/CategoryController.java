package com.project.crud.controller;


import com.project.crud.model.Category;
import com.project.crud.model.exception.CategoryNotFoundException;
import com.project.crud.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @ResponseStatus(code = HttpStatus.CREATED)
    @PostMapping
    public void save(@RequestBody final Category category) {
        categoryService.save(category);
    }

    @PutMapping
    public void update(@RequestBody final Category category) throws CategoryNotFoundException {
        categoryService.update(category);
    }

    @GetMapping
    public List<Category> searchAll() {
        return categoryService.findAll();
    }

    @GetMapping("/{id}")
    public Category searchById(@PathVariable final Long id) throws CategoryNotFoundException {
        return categoryService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable final Long id) throws CategoryNotFoundException {
        categoryService.deleteById(id);
    }


}
