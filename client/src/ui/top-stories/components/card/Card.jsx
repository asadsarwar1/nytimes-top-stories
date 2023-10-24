import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const StoryCard=({article})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={article?.multimedia?.[0]?.url || ''}
        title={article.multimedia?.[0].caption || ''}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {article?.byline || ''}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article?.abstract || ''}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>article?.url ? window.open(article?.url, "_blank", "noreferrer"):''}>view article</Button>
      </CardActions>
    </Card>
  );
}

export default StoryCard;