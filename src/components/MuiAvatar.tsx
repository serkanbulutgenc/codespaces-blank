import { Avatar, Stack, AvatarGroup } from "@mui/material"

export default function AvatarPage() {
    return <Stack spacing={4}>
        <Stack direction={'row'} spacing={1}>
            <Avatar sx={{ bgcolor: 'primary.light' }}>Bw</Avatar>
            <Avatar sx={{ bgcolor: 'success.light' }}>Ck</Avatar>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <AvatarGroup max={3}>
                <Avatar sx={{ bgcolor: 'primary.light' }}>Bw</Avatar>
                <Avatar sx={{ bgcolor: 'success.light' }}>Ck</Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="Jane doe" />
                <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" alt="John doe" />
            </AvatarGroup>
        </Stack>
        <Stack direction={'row'} spacing={1}>
            <Avatar variant="square" sx={{ bgcolor: 'primary.light', width:48, height:48 }}>Bw</Avatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'success.light', width:48, height:48 }}>Ck</Avatar>
        </Stack>
    </Stack>
}