package com.project.crud.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@SequenceGenerator(name = "roles_id_sequence", initialValue = 1, allocationSize = 1)
@Entity(name = "roles")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Role implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "roles_id_sequence")
    private Long id;

    private String name;

    @Override
    public String getAuthority() {
        return this.name;
    }
}
