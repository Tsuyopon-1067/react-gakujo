import { Edit } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useState } from "react";
import { ContextApp, MainLocalStorageData } from './FixedBottomNavigation';
import { ClassCellProps } from './TimeTable';
import { UniCategory, UniClass, UniOnline, UniTable } from './timeTableTypes';

export default function TimeTableSetting({ day, period, index }: ClassCellProps) {
    const [data, setData] = React.useContext(ContextApp);
    const [open, setOpen] = useState(false);
    const dayLabels = ["", "月", "火", "水", "木", "金"];
    const classData = data.getClass(day - 1, period - 1).getClass(index);
    const [name, setName] = useState(classData.getName());
    const [teacher, setTeacher] = useState(classData.getTeacher());
    const [room, setRoom] = useState(classData.getRoom());
    const [online, setOnline] = useState(classData.getOnline());
    const [credit, setCredit] = useState(classData.getCredit());
    const [category, setCategory] = useState(classData.getCategory());
    const [memo, setMemo] = useState(classData.getMemo());
    const [length, setLength] = useState(classData.getLength());

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleSave = (data: UniTable) => {
        setOpen(false);
        const tmp = new UniClass(name, teacher, room, credit, online, category, length, memo);
        data.setClass(tmp, day - 1, period - 1, index);
        data = new UniTable(data.getClasses());
        setData(data);
        MainLocalStorageData.setUniTable(data);
        MainLocalStorageData.saveData();
    };

    return (
        <React.Fragment>
            <IconButton onClick={handleClickOpen} sx={{ width: 12, height: 12, padding: 0, margin: 0, display: "flex" }}>
                <Edit sx={{ width: 12, height: 12 }} />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {`編集：${dayLabels[day]}曜日 ${period}コマ`}
                </DialogTitle>
                <DialogContent>
                    <TextField fullWidth label="科目名" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField fullWidth label="教員名" variant="standard" value={teacher} onChange={(e) => setTeacher(e.target.value)} />
                    <TextField fullWidth label="教室" variant="standard" onChange={(e) => setRoom(e.target.value)} />
                    <TextField fullWidth label="単位数" type="number" InputLabelProps={{ shrink: true, }} variant="standard" value={credit} onChange={(e) => setCredit(Number(e.target.value))} />
                    <TextField fullWidth select label="授業形態" defaultValue={UniOnline.labels[0]}
                        SelectProps={{ native: true, }}
                        variant="standard"
                        value={online}
                        onChange={(e) => {
                            const index = UniOnline.labels.indexOf(e.target.value);
                            setOnline(new UniOnline(index));
                        }}
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
                        defaultChecked={true}
                        value={category}
                        onChange={(e) => {
                            const index = UniCategory.labels.indexOf(e.target.value);
                            setCategory(new UniCategory(index));
                        }}
                    >
                        {UniCategory.labels.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField>
                    <TextField fullWidth id="standard-number" label="連続" type="number" InputLabelProps={{ shrink: true, }} variant="standard" value={length} onChange={(e) => setLength(Number(e.target.value))} />
                    <TextField fullWidth label="メモ" multiline rows={8} defaultValue={"hogehoge"} sx={{ marginTop: 2 }} value={memo} onChange={(e) => setMemo(e.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCancel}>
                        キャンセル
                    </Button>
                    <Button onClick={() => handleSave(data)} autoFocus>
                        保存
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}