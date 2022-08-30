function ListeDeoulante(element, variable, modifier) {
    return variable === false ?
    (
    modifier(true),
    element.target.classList.remove("flipArrow2"),
    element.target.classList.add("flipArrow")
    )
    :
    (
    modifier(false),
    element.target.classList.remove("flipArrow"),
    element.target.classList.add("flipArrow2")

    )
}

export default ListeDeoulante