package com.project.crud.service;

import com.project.crud.model.Category;
import com.project.crud.model.exception.CategoryNotFoundException;
import com.project.crud.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public void save(final Category category) {
       categoryRepository.save(category);
    }

    public void update(final Category category) throws CategoryNotFoundException {
        final Optional<Category> categorySaved = categoryRepository.findById(category.getCode());
        validateIfCategoryExists(categorySaved);
        categoryRepository.save(category);

    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public Category findById(final Long id) throws CategoryNotFoundException {
        final Optional<Category> categorySaved = categoryRepository.findById(id);
        validateIfCategoryExists(categorySaved);
        return categorySaved.get();
    }

    public void deleteById(final Long id) throws CategoryNotFoundException {
        final Optional<Category> categorySaved = categoryRepository.findById(id);
        validateIfCategoryExists(categorySaved);
        categoryRepository.deleteById(id);
    }

    private boolean validateIfCategoryExists(final Optional<Category> categoryOptional) throws CategoryNotFoundException {
        if(categoryOptional.isPresent()) {
            return true;
        } else {
            throw new CategoryNotFoundException("Categoria não existe!");
        }
    }

}
