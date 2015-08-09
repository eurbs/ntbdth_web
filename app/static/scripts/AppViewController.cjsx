xhr = require('xhr')


ContentDisplay = React.createClass
    render: ->
        if (@props.textToRender == "")
            <div className="alert alert-danger" role="alert">
                plz try again. that was sad dude.
            </div>
        else
            <div className="well well-lg">
                {@props.textToRender}
            </div>

module.exports =
React.createClass
    getInitialState: ->
        return {
            answerTry: ""
            message: "Welcome, Nick. Enter your codes below"
            textToRender: ""
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
            @setState(message: body)
        )

    onTextFieldChange: (e) ->
        @setState(answerTry: e.target.value)    

    render: ->
        return (
            <div className="container">
                <h1> help. </h1>
                <ContentDisplay textToRender={@state.message} />
                <form onSubmit={@onSubmit}>
                    <input type="text" className="form-control" onChange={@onTextFieldChange}/>
                    <input type="submit" className="form-control"/>
                </form>
            </div>
        )
