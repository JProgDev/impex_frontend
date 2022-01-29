import Link from "next/link";
import {InsuranceList} from "../../../components";

const InsuranceDetailsPage = () => {
    return <div className="mt-4">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h3 className="fs_3 text-bolder">Transport vositalari sug&apos;urtasi</h3>
                    <hr/>
                    <p className="fs_1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur
                        deleniti illum labore
                        nostrum, quibusdam sint. Accusamus atque, consectetur corporis dicta dolore, dolores doloribus
                        ea earum eos eum, explicabo id impedit in incidunt ipsam laudantium minus modi nam natus
                        praesentium provident rerum saepe sit sunt totam unde velit voluptatem? Aspernatur corporis et
                        exercitationem iste nihil nobis non odit quas quis tempora! Accusantium, adipisci aliquam amet
                        at blanditiis dolorum eligendi ex fuga fugiat fugit harum incidunt laboriosam maiores modi
                        molestiae necessitatibus neque odit officia perferendis possimus, praesentium provident quaerat
                        quam quo repudiandae rerum sed tempora vitae voluptatem voluptatum. Architecto, quia
                        quibusdam.</p>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <InsuranceList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default InsuranceDetailsPage;