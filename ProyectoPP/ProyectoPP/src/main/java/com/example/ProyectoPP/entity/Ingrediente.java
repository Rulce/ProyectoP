package com.example.ProyectoPP.entity;

import java.io.Serializable;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ingrediente")
public class Ingrediente implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 6434015715781062033L;

	@Id
	@Column(name = "idingrediente")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private Integer idingrediente;

	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "cantidad_stock")
	private Integer cantidadStock;
	
	public Integer getIdingrediente() {
		return idingrediente;
	}

	public void setIdingrediente(Integer idingrediente) {
		this.idingrediente = idingrediente;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Integer getCantidadStock() {
		return cantidadStock;
	}

	public void setCantidadStock(Integer cantidadStock) {
		this.cantidadStock = cantidadStock;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
}
