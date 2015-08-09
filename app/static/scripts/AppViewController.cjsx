xhr = require('xhr')

Swag = React.createClass
    render: ->
        <h1> swag: {@props.message} </h1>

module.exports =
React.createClass
    getInitialState: ->
        return {
            answerTry: ""
            message: ""
        }

    onSubmit: (e) ->
        e.preventDefault()
        console.log("blah")
        url = "/answers"
        hah = ""
        data = { ans: @state.answerTry }
        req = xhr({
            body: JSON.stringify(data),
            uri: url,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        }, (err, resp, body) =>
            console.log(body)
            hah = body
            @setState(message: hah)
        )

    onTextFieldChange: (e) ->
        @setState(answerTry: e.target.value)

    render: ->
        return (
            <div className="jumbotron">
                <h1> Flacore Template</h1>
                <Swag message="emilee" />
                <p>{@state.message}</p>
                <form onSubmit={@onSubmit}>
                    <input type="text" onChange={@onTextFieldChange}/>
                    <input type="submit" className="form-control"/>
                </form>
                <p> ..loaded!ytguukhjbhj Now let's get to work. </p>
            </div>
        )
