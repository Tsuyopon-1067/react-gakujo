import { Edit } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { UniCategory, UniOnline } from '../type';
import { GridCellProps } from './TimeTable';

export default function TimeTableSetting({ data, day, period, length }: GridCellProps) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dayLabels = ["", "月", "火", "水", "木", "金"];
    return (
        <React.Fragment>
            <IconButton onClick={handleClickOpen} sx={{ width: 12, height: 12, padding: 0, margin: 0, display: "flex" }}>
                <Edit sx={{ width: 12, height: 12 }} />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {`編集：${dayLabels[day]}曜日 ${period}コマ`}
                </DialogTitle>
                <DialogContent>
                    <TextField fullWidth label="科目名" variant="standard" />
                    <TextField fullWidth label="教員名" variant="standard" />
                    <TextField fullWidth label="教室" variant="standard" />
                    <TextField fullWidth label="単位数" type="number" InputLabelProps={{ shrink: true, }} variant="standard" />
                    <TextField fullWidth select label="授業形態" defaultValue={UniOnline.labels[0]}
                        SelectProps={{ native: true, }}
                        variant="standard"
                    >
                        {UniOnline.labels.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField>
                    <br />
                    <TextField fullWidth select label="科目分類" defaultValue={UniOnline.labels[0]}
                        SelectProps={{ native: true, }}
                        variant="standard"
                    >
                        {UniCategory.labels.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField>
                    <TextField fullWidth id="standard-number" label="連続" type="number" InputLabelProps={{ shrink: true, }} variant="standard" />
                    <TextField fullWidth label="メモ" multiline rows={8} defaultValue={"hogehoge"} sx={{ marginTop: 2 }} />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        キャンセル
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        保存
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}