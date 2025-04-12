import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infobox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // COLD
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const IMG_URL =
    "https://media.istockphoto.com/id/1135344705/photo/colorful-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=nyVzCLhQOA9oR4RSimmZ9WwzgefMSEJt25mBYJnYU8U=";

  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1668699480299-b8b7e1e6f687?q=80&w=907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <h1>Weather Info</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? COLD_URL : HOT_URL
          }
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.City}{" "}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <AcUnitIcon /> 
            ) : (
              <WbSunnyIcon />
            )}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="span"
          >
            <div>Temperature: {info.temp}&deg;C</div>
            <div>Humidity: {info.humidity}%</div>
            <div>Min Temperature: {info.tempMin}&deg;C</div>
            <div>Max Temperature: {info.tempMax}&deg;C</div>
            <div>Weather: {info.weather}</div>
            <div>Feels Like: {info.feelsLike}&deg;C</div>

            <p>
              The weather is described as {info.weather}, and it feels like{" "}
              {info.feelsLike}&deg;C.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
