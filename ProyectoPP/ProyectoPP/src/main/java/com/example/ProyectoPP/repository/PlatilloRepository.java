package com.example.ProyectoPP.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProyectoPP.entity.Platillo;


@Repository("platilloRepository")

public interface PlatilloRepository extends JpaRepository<Platillo, Integer>{

	public List<Platillo> findByPrecioVentaBetween(Double precioMin, Double precioMax);

	
}
