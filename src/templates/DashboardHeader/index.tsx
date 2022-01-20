import { AppBar, Toolbar, Button, Box, Typography } from "@material-ui/core"

import useStyles from "templates/DashboardHeader/style"

export const DashboardHeader = () => {
    const styles = useStyles()

    return (
        <AppBar className={styles.appbar}>
            <Toolbar>
                <Typography variant="h6" className={styles.title}>
                    Koki-Sys Portfolio
                </Typography>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Button className={styles.btn}>
                    <p>Works</p>
                </Button>
                <Button className={styles.btn}>
                    <p>About</p>
                </Button>
            </Toolbar>
        </AppBar>
    )
}
