import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

function Contacto() {
    
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('El nombre es obligatorio'),
      email: Yup.string()
        .email('Correo electrónico inválido')
        .required('El correo electrónico es obligatorio'),
      asunto: Yup.string()
        .required('El asunto es obligatorio'),
      mensaje: Yup.string()
        .required('El mensaje es obligatorio')
    }),
  });

  return (
    <section className="bg-white p-8">
      <h2 className="text-black text-2xl font-bold mb-6">Ponete en contacto con nosotros</h2>
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Nombre" 
          name="nombre"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombre}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.nombre && formik.errors.nombre ? <div className="text-red-500 text-sm">{formik.errors.nombre}</div> : null}

        <input 
          type="email" 
          placeholder="Correo electrónico" 
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null}

        <input 
          type="text" 
          placeholder="Asunto" 
          name="asunto"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.asunto}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.asunto && formik.errors.asunto ? <div className="text-red-500 text-sm">{formik.errors.asunto}</div> : null}

        <textarea 
          placeholder="Mensaje" 
          name="mensaje"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mensaje}
          className="w-full p-2 border border-gray-300 rounded h-32"
        ></textarea>
        {formik.touched.mensaje && formik.errors.mensaje ? <div className="text-red-500 text-sm">{formik.errors.mensaje}</div> : null}

        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">Enviar</button>
      </form>

      <div className="mt-8">
        <p className="text-black">Buenos Aires, La Plata</p>
        <p className="text-black"><strong>Teléfono:</strong> +54 221303721</p>
        <p className="text-black"><strong>Email:</strong> torresfacundo.lt@gmail.com</p>
      </div>
    </section>
  );
}

export default Contacto;
