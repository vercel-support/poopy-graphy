import withTheme from '@material-ui/core/styles/withTheme'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { ResponsiveLine } from '@nivo/line'
import format from 'date-fns/format'

const toDecimal = (value: number) =>
  value.toFixed(Math.abs(Math.log10(value)) + 5)

function Graph({ theme, trades, symbol }: any) {
  const data = [
    {
      id: symbol,
      data: trades,
    },
  ]
  const ToolTip = ({ point }: any) => {
    return (
      <Paper>
        <Box p={1}>
          <Typography variant="button" component="div" color="textSecondary">
            {point.data.xFormatted}
          </Typography>
          <Typography variant="caption" component="div">
            {point.data.yFormatted}
          </Typography>
        </Box>
      </Paper>
    )
  }
  return (
    <ResponsiveLine
      margin={{ top: 10, right: 25, bottom: 50, left: 75 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      theme={{
        grid: {
          line: {
            stroke: theme.palette.action.disabledBackground,
          },
        },
        textColor: theme.palette.text.secondary,
      }}
      xFormat={(d: string) =>
        (Date.parse(d) && format(new Date(d), 'MM/dd p')) ?? 'null'
      }
      yFormat={(f: number) => toDecimal(f)}
      animate={true}
      enablePoints={false}
      useMesh={true}
      enableGridY={true}
      enableGridX={false}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        //@ts-ignore
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -10,
        legend: 'USD',
        legendOffset: -60,
        legendPosition: 'middle',
        format: '>-.1e',
      }}
      tooltip={ToolTip}
      data={data}
    />
  )
}

export default withTheme(Graph)
