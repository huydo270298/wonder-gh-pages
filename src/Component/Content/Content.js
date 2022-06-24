import React, { useState } from 'react'

function Content( props ) {

  const [state, setState] = useState(0)

  const renderForm = () => (
    <div className='row'>
      <div className='form-group'>
        <input 
          type='text' 
          name='name' 
          className='form-control'
          defaultValue={ props.title }
        />
        <div className='btn btn-block btn-danger mt-2' onClick={() => handleClickSave()}>Save</div>
      </div>
    </div>
  )

  const renderBtn = () => (
    <div className='row'>
      <div className='btn btn-group'>
        <div className='btn btn-info' onClick={() => handleClickEdit()}>Edit</div>
        <div className='btn btn-warning'>Remove</div>
      </div>
    </div>
  )

  const checkDisplay = () => {
    if (state !== 0) {
      return renderForm()
    } else {
      return renderBtn()
    }
  }

  const handleClickEdit = () => {
    setState(1);
  }

  const handleClickSave = () => {
    setState(0);
  }

  return ( 
    <section id="scroll">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className={"col-lg-6 " + props.order }>
            <div className="p-5"><img className="img-fluid rounded-circle" src={ props.src } alt="..." /></div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="display-4">{ props.title }</h2>
              <p>{ props.content }</p>
              {checkDisplay()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;