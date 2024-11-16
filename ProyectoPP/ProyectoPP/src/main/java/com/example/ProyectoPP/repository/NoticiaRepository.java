package com.example.ProyectoPP.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProyectoPP.entity.Noticia;


@Repository("noticiaRepository")
public interface NoticiaRepository extends JpaRepository<Noticia, Integer>{

	public List<Noticia> findByFechaPublicacionBefore(LocalDateTime fechaPublicacion);
	
}
