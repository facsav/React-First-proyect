

export function CartItem (infoDetalle) {
    return(
        
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={infoDetalle.foto} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{infoDetalle.titulo}</h5>
                        <p class="card-text">pendiente</p>
                        <p class="card-text"><small class="text-muted">aaaaa</small></p>
                    </div>
                </div>
            </div>
        </div>   
    )
}