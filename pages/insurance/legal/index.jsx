import {InsuranceItem} from "../../../components";

const LegalInsurancesPage = () => {
    return <div>
        <h3 className="title text-uppercase">Yuridik shaxslar uchun sug`urtalar</h3>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <InsuranceItem {...{
                        icon: 'ant-design:car-outlined',
                        href: '1',
                        title: 'Avtomobil sug`urtasi',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, nesciunt!'
                    }} />
                </div>
            </div>
        </div>
    </div>
}

export default LegalInsurancesPage;