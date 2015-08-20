xhr = require('xhr')


StorylineDisplay = React.createClass
    render: ->
        # wrong code was entered
        if not @props.textToRender
            <div className="alert alert-danger" role="alert">
                plz try again. that was sad dude.
            </div>
        else
            <div className="well well-lg">
                {@props.textToRender}
            </div>

ClueDisplay = React.createClass
    render: ->
        # this is super dangerous, but it is just a treasure hunt after all
        <div className="well well-sm" dangerouslySetInnerHTML={{__html: @props.textToRender}}>
            
        </div>

module.exports =
React.createClass
    getInitialState: ->
        return {
            answerTry: ""
            message: "Welcome, Nick. Enter your codes below."
            clue: "What might go here?"
            yesNo: false
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
            returned_data = JSON.parse(body)
            @setState(message: returned_data["storyline"])
            @setState(clue: returned_data["clue"])
        )

    onTextFieldChange: (e) ->
        @setState(answerTry: e.target.value)    

    render: ->
        return (
            <div className="container">
                <h1> help. </h1>
                <StorylineDisplay textToRender=@state.message />
                <form onSubmit={@onSubmit}>
                    <input type="text" className="form-control" onChange={@onTextFieldChange}/>
                    <input type="submit" className="form-control"/>
                </form>
                <br/><br/><br/>
                <ClueDisplay textToRender=@state.clue />
            </div>
        )
