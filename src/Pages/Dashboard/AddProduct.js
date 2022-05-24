import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey='49a5d838e4a2bd75ea6e6064937e635c';
    const onSubmit = async data => {
       
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img = result.data.url;
                const tool = {
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    img: img,
                    minQuantity:data.minQuantity,
                    availableQuantity:data.availableQuantity
                }
                fetch('http://localhost:5000/tool',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(tool)
                })
                .then(res=>res.json())
                .then(tool=>{
                    console.log(tool)
                    data.reset()
                })
            }
        })
        
    }
  return (
    <div>
    <h2 className="text-2xl">Add a New Doctor</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control w-full max-w-xs">
            
            <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is Required'
                    }
                })}
            />
            <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
        </div>

        <div className="form-control w-full max-w-xs">
        <label className="label">
                        <span className="label-text">Description</span>
                    </label>
            <textarea
                type="text"
                className="textarea input-bordered w-full max-w-xs"
                {...register("description", {
                    required: {
                        value: true,
                        message: 'Description is Required'
                    }
                })}
            > </textarea>
            <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
            
        </div>
        <div className="form-control w-full max-w-xs">
           
            <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                    required: {
                        value: true,
                        message: 'Price is Required'
                    }
                })}
            /> 
            <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
            
        </div>
        <div className="form-control w-full max-w-xs">
            
            <input
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("availableQuantity", {
                    required: {
                        value: true,
                        message: 'Available Quantity is Required'
                    }
                })}
            /> 
            <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
            
        </div>
        <div className="form-control w-full max-w-xs">
           
            <input
                type="text"
                placeholder="Minimum Quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("minQuantity", {
                    required: {
                        value: true,
                        message: 'minimum Quantity is Required'
                    }
                })}
            /> 
            <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
            
        </div>

       

        <div className="form-control w-full max-w-xs">
            
            <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                    required: {
                        value: true,
                        message: 'Image is Required'
                    }
                })}
            />
            <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
           
        </div>

        <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
    </form>
</div>
);
};


export default AddProduct;
