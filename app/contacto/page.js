export default function App() {
    return(
        <div role="main" id="main" class="cont box3d marbot">
            <h1>Contacto</h1>
            <label for="email">Correo electronico</label>
            <input id="email" type="email" placeholder="Email" name="email"/>
            <label for="mensaje">Mensaje o Comentario</label>
            <textarea id="mensaje" placeholder="Mensaje o Comentario" name="mensaje"></textarea>
            <input type="button" value="Enviar"/>
        </div>
    )
}