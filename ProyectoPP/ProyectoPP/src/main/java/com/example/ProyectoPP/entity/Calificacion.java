package com.example.ProyectoPP.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "calificacion")

public class Calificacion implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Integer getIdcalificacion() {
		return idcalificacion;
	}

	public void setIdcalificacion(Integer idcalificacion) {
		this.idcalificacion = idcalificacion;
	}

	public Integer getNota() {
		return nota;
	}

	public void setNota(Integer nota) {
		this.nota = nota;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Integer getNoExamen() {
		return noExamen;
	}

	public void setNoExamen(Integer noExamen) {
		this.noExamen = noExamen;
	}

	public LocalDateTime getFechaCalificacion() {
		return fechaCalificacion;
	}

	public void setFechaCalificacion(LocalDateTime fechaCalificacion) {
		this.fechaCalificacion = fechaCalificacion;
	}

	@Id
	@Column(name = "idcalificacion")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private Integer idcalificacion;

	@Column(name = "nota")
	private Integer nota;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "no_examen")
	private Integer noExamen;
	
	@Column(name = "fecha_calificacion")
	private LocalDateTime fechaCalificacion;
	
	@PrePersist
	protected void onCreate() {
	    this.fechaCalificacion = LocalDateTime.now();
	}
}
