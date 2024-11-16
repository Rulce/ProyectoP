package com.example.ProyectoPP.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProyectoPP.entity.Calificacion;

@Repository("calificacionRepository")

public interface CalificacionRepository extends JpaRepository<Calificacion, Integer>{

	public List<Calificacion> findByNotaAndNoExamen(Integer nota,Integer noExamen);
	
}
