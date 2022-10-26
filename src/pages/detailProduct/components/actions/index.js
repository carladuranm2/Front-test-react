import React from "react";
import './index.css';
import useActionAddProduct from "./hooks/useActionAddProduct";
export default function Actions ({
    detail
}) {

    const {addProduct,getDataFormSelect,submit} = useActionAddProduct(detail);

    return (
        <div>
            <div className="description-title">
                Actions
            </div>
            <div className="body">
                <form action="">
                    <span className="title">Choose your color:</span>
                    <div className="caja">
                        <select onChange={getDataFormSelect} name="colorCode" defaultValue={detail?.options?.colors[0]?.code}>
                            {detail?.options?.colors.map((data) =>
                                <option key={data.code} value={data.code}>{data.name}</option>
                            )}
                        </select>
                    </div>
                    <span className="title">Choose your storage capacity:</span>
                    <div className="caja">
                        <select onChange={getDataFormSelect} name="storageCode" defaultValue={detail?.options?.storages[0]?.code}>
                            {detail?.options?.storages?.map((item) =>
                                <option key={item.code} value={item.code}>{item.name}</option>
                            )}
                        </select>
                    </div>
                    <button className="CreateTodoButton"
                        onClick={submit}>
                        +
                    </button>
                </form>
            </div>
        </div>
    )
}