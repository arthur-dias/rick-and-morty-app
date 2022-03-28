import { Link } from 'react-router-dom'

// CSS
import styles from './Character.module.css'

const Character = ({ character }) => {
  const { name, image, id } = character

  return (
    <Link to={'/character/' + id} className={styles.character}>
      <img src={image} alt={name} />
      <p className={styles.character_name}>{name}</p>
      {/* <button className={styles.character_not_favorited}>z&#9734;</button>
      <button className={styles.character_favorited}>&#9733;</button> */}
    </Link>
  )
}

export default Character
