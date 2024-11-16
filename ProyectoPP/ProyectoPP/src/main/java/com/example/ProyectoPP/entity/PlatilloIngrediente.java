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
@Table(name = "platillo_ingrediente")

public class PlatilloIngrediente implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -3957858299781147918L;

	@Id
	@Column(name = "idplatillo_ingrediente")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private Integer idplatillo_ingrediente;

	@Column(name = "cantidad_ingrediente")
	private Integer cantidadIngrediente;
	
	@Column(name = "platillo_idplatillo")
	private Integer platilloIdplatillo;
	
	@Column(name = "ingrediente_idingrediente")
	private Integer ingredienteIdingrediente;

	public Integer getIngredienteIdingrediente() {
		return ingredienteIdingrediente;
	}

	public void setIngredienteIdingrediente(Integer ingredienteIdingrediente) {
		this.ingredienteIdingrediente = ingredienteIdingrediente;
	}

	public Integer getCantidadIngrediente() {
		return cantidadIngrediente;
	}

	public Integer getPlatilloIdplatillo() {
		return platilloIdplatillo;
	}

	public void setPlatilloIdplatillo(Integer platilloIdplatillo) {
		this.platilloIdplatillo = platilloIdplatillo;
	}

	public void setCantidadIngrediente(Integer cantidadIngrediente) {
		this.cantidadIngrediente = cantidadIngrediente;
	}

	public Integer getIdplatillo_ingrediente() {
		return idplatillo_ingrediente;
	}

	public void setIdplatillo_ingrediente(Integer idplatillo_ingrediente) {
		this.idplatillo_ingrediente = idplatillo_ingrediente;
	}

	
}
