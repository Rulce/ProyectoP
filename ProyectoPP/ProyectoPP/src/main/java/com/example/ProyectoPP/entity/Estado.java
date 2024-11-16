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
@Table(name = "estado_pedido")

public class Estado implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 4093779310410103062L;

	@Id
	@Column(name = "idestado_pedido")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private Integer idestadoPedido;

	@Column(name = "estado")
	private String estado;
	
	public Integer getIdestadoPedido() {
		return idestadoPedido;
	}

	public void setIdestadoPedido(Integer idestadoPedido) {
		this.idestadoPedido = idestadoPedido;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
