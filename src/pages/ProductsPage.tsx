import {useProducts} from "../hooks/products";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContex";
import {IProduct} from "../../models";
import {Loader} from "../components/Loader";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductPage() {
    const {products, loading, addProduct} = useProducts()
    const {modal, open, close: closeModal} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        closeModal()
        addProduct(product)
    }
    return (
            <div className="container mx-auto max-w-2xl pt-5">
                {loading && <Loader/>}
                {products.map(product => <Product product={product} key={product.id}/>)}
                { modal &&
                <Modal title="Create new product" onClose={closeModal}>
                    <CreateProduct onCreate={createHandler}/>
                </Modal>
                }
                <button className="absolute button-5 right-5 rounded-full bg-red-700 text-white px-4 py-2"
                        onClick={open}>+</button>
            </div>
    )
}