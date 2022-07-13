const sliderStyle = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        whiteSpace: 'nowrap',
        transition: 'all .2s',
        transform: 'scale(1)',
        width: '100%',
        overflowX: 'scroll',
        overflowY: 'scroll',
        backgroundColor: 'powderblue'
    },
    sliderContainer: {
        position: 'relative',
        whiteSpace: 'nowrap',
        overflowX: 'scroll',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '75vw',

        border: 'solid black 1px'
    },
    sliderDialContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '10%',
        border: 'solid blue 1px'
    }
}

export default sliderStyle