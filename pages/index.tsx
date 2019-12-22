import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Hello Next.js
                </Typography>
            </Box>
        </Container>
    );
}

export default Home;
