export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>

            <p>{props.repository?.description ?? 'Default'}</p>

            <a href={props.repository?.html_url ?? 'Default'}>
                Acessar repositorio
            </a>
        </li>
    );
}