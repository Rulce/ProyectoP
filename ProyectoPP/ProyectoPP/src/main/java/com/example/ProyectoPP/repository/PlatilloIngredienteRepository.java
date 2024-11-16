package com.example.ProyectoPP.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProyectoPP.entity.PlatilloIngrediente;


@Repository("platilloIngredienteRepository")

public interface PlatilloIngredienteRepository extends JpaRepository<PlatilloIngrediente, Integer>{

}
