import React from "react"

const Modal = props => {
    return (
        <>
                        <div class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title"
                                            id="exampleModalLabel">
                                        </h3>
                                        <button
                                            type="button"
                                            class="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <h5>
                                            <strong>Ubicación</strong>
                                        </h5>
                                        <br />
                                        <img
                                            id="img-modal"
                                            src="..."
                                            alt="..." />
                                    </div>
                                    <div class="modal-footer">
                                        <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

const Ex2 = props => {
    return (
        <>
            
                <div>
                    <div id="modal">
                        <button
                            type="button"
                            className="btn btn-danger d-flex content-justify-center"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            Modal
                        </button>
                    </div>
                </div>
            
            <Modal />
        </>
    );
}

export default Ex2;