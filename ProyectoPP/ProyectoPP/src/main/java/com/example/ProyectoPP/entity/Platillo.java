package com.example.ProyectoPP.entity;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "platillo")

public class Platillo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 6784142355402581801L;

	@Id
	@Column(name = "idplatillo")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private Integer idplatillo;

	@Column(name = "precio_venta")
	private Double precioVenta;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@Column(name = "foto")
	private String foto;
	
	@OneToMany(cascade = CascadeType.ALL,
			fetch = FetchType.LAZY,
			mappedBy = "platilloIdplatillo")
	private List<PlatilloIngrediente> Plain;

	public Integer getIdplatillo() {
		return idplatillo;
	}

	public void setIdplatillo(Integer idplatillo) {
		this.idplatillo = idplatillo;
	}

	public Double getPrecioVenta() {
		return precioVenta;
	}

	public void setPrecioVenta(Double precioVenta) {
		this.precioVenta = precioVenta;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public List<PlatilloIngrediente> getPlain() {
		return Plain;
	}

	public void setPlain(List<PlatilloIngrediente> plain) {
		Plain = plain;
	}

}
