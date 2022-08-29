function ListeDeoulante(variable, modifier) {
    return variable === false ? modifier(true) : modifier(false)
}

export default ListeDeoulante