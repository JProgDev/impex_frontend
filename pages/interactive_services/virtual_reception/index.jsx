const VirtualReception = () => {

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = {};
        const data = new FormData(e.target)
        for (let [key, value] of data) {
            formData[key] = value;
        }
        if(!formData.type){
            return alert('Murojaat turini tanlang')
        }
        console.log(formData)
    }

    return <div className={'mt-4'}>
        <div className="container">
            <h3 className="fs_3 text-bolder">Vertual qabulxona</h3>
            <hr/>
            <div className="card">
                <div className="card-body">
                    <form className="row" onSubmit={submitHandler}>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="fish" className="form-label">F. I. Sh.</label>
                                <input name="fish" type="text" className="form-control" id="fish" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mail" className="form-label">Elektron manzil</label>
                                <input name="mail" type="mail" className="form-control" id="mail" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="region" className="form-label">Viloyat/tuman/shahar</label>
                                <input name="region" type="text" className="form-control" id="region" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telNumber" className="form-label">Telefon raqam</label>
                                <input name="telNumber" type="number" className="form-control"
                                       placeholder={'99 111 11 11'}
                                       id="telNumber" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Manzil</label>
                                <input name="address" type="text" className="form-control" id="address"
                                       required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Murojaat turi</label>
                                <select name="type" className="form-select" aria-label="Murojaat turi" id="type"
                                        required>
                                    <option value="invalid" selected disabled>Tanlash uchun bosing</option>
                                    <option value="savol">savol</option>
                                    <option value="shikoyat">Shikoyat</option>
                                    <option value="taklif">Taklif</option>
                                    <option value="boshqa">Boshqa</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="form-label">Habar</label>
                                <textarea name="message" className="form-control" id="message" rows={8}
                                          required/>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary">Jo`natish</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default VirtualReception;