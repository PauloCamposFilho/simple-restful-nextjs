import styles from '../styles/Country.module.css';
const Country = (props) => {
  const languages = Object.values(props.languages).join(', ');
  return (
    <div className={styles.country}>
      <div className={styles.flag_container}>
        <img className={styles.flag} src={props.flags.svg} alt={`${props.name.common} flag. ${props.flags.alt}`} />
        <img className={styles.flag} src={props.coatOfArms.svg} alt={`${props.name.common} coat of arms.`} />
      </div>
      <h2 className={styles.name}>{props.name.common} - {props.cca3}</h2>
      <h3 className={styles.official_name}>Official Name: {props.name.official}</h3>
      <div className={styles.stats}>
        <span className={styles.stats}>Population: {props.population.toLocaleString()}</span>
        <span className={styles.stats}>Indepent: {props.independent ? "Yes" : "No"}</span>
        <span className={styles.stats}>Region: {props.region}</span>
        <span className={styles.stats}>Sub-region: {props.subregion}</span>
        <span className={styles.stats}>Languages: {languages}</span>
      </div>
      <div className={styles.map_app_container}>
        <a className={styles.map_app_info} href={props.maps.openStreetMaps} target='_blank'><img className={styles.map_app_icon} src='/osm.svg' /><span>View in OpenStreetMaps</span></a>
      </div>
      <div className={styles.map_app_container}>
        <a className={styles.map_app_info} href={props.maps.googleMaps} target='_blank'><img className={styles.map_app_icon} src='/gmaps.svg' /><span>View in GoogleMaps</span></a>
      </div>
    </div>
  );
};

export default Country;