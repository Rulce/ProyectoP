package com.example.ProyectoPP.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ProyectoPP.entity.Ingrediente;

@Repository("ingredienteRepository")
public interface IngredienteRepository extends JpaRepository<Ingrediente, Integer>{
	
	
	public List<Ingrediente> findByNombreLike(String nombre);
	public List<Ingrediente> findAllByOrderByCantidadStockDesc();
}
