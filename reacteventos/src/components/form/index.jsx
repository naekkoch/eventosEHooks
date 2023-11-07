const Form = ({handleAddItemToList, handleChangeInput,task}) => {
    return(
      <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Adicione seus filmes favs"
          onChange={handleChangeInput}
          value={task}
        />
        <button type="submit">Adicionar</button>
      </form>
    )
}
export default Form