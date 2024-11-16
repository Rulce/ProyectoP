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
@Table(name = "detalle_pedido")

public class DetallePedido implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -229545947625272930L;

	@Id
	@Column(name = "iddetalle_pedido")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private Integer iddetalle_pedido;

	@Column(name = "cantidad")
	private Integer cantidad;

	@Column(name = "precio_unitario")
	private Double precioUnitario;

	@Column(name = "pedido_idpedido")
	private Integer pedidoIdpedido;
	
	@Column(name = "platillo_idplatillo")
	private Integer platilloIdplatillo;
	
	public Integer getPlatilloIdplatillo() {
		return platilloIdplatillo;
	}

	public void setPlatilloIdplatillo(Integer platilloIdplatillo) {
		this.platilloIdplatillo = platilloIdplatillo;
	}

	public Integer getIddetalle_pedido() {
		return iddetalle_pedido;
	}

	public void setIddetalle_pedido(Integer iddetalle_pedido) {
		this.iddetalle_pedido = iddetalle_pedido;
	}

	public Integer getPedidoIdpedido() {
		return pedidoIdpedido;
	}

	public void setPedidoIdpedido(Integer pedidoIdpedido) {
		this.pedidoIdpedido = pedidoIdpedido;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	public Double getPrecioUnitario() {
		return precioUnitario;
	}

	public void setPrecioUnitario(Double precioUnitario) {
		this.precioUnitario = precioUnitario;
	}

}
