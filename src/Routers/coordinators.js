export const nextHomePage = (navigate) => {
    navigate('/');
}
export const nextListPage = (navigate, name) => {
    navigate(`/List/${name}`);
}
export const nextDetailsPage = (navigate, name) => {
    navigate(`/List/Details/${name}`)
}
