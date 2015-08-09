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

        data = { ans: @state.answerTry }
        xhr({
            body: JSON.stringify(data),
            uri: url,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        }, (err, resp, body) ->
            console.log(body)
        )

        # oReq = new XMLHttpRequest()
        # figure out what this magic is
        # bind THIS to the THIS outside of the scope
        # oReq.onload = =>
            # res = oReq.responseText
            # @setState(message: res)
        # data = { ans: @state.answerTry }
        # oReq.responseType = 'json'
        # oReq.open("POST", url)
        # oReq.send(JSON.stringify(data))

    onTextFieldChange: (e) ->
        @setState(answerTry: e.target.value)



    render: ->
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