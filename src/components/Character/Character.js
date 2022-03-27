import { Link } from 'react-router-dom'

// CSS
import styles from './Character.module.css'

const Character = ({ character }) => {
  const { name, image, id } = character

  return (
    <Link to={'/character/' + id} className={styles.character}>
      <img src={image} alt={name} />
      <p className={styles.character_name}>{name}</p>
    </Link>
  )
}

export default Character
