const NameShower = ({data}) => {
    const {firstname,secondname} = data
    // const data = props.data;
    // const info = props.info;
    // const {data} = props;
    return <h1>{firstname} {secondname}</h1>
}
export default NameShower;