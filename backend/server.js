const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Endpoint Simulasi Cek ID Game
app.post('/api/v1/game/check-id', (req, res) => {
    const { userId, zoneId } = req.body;
    if (!userId) {
        return res.status(400).json({ success: false, message: 'User ID wajib diisi!' });
    }
    
    setTimeout(() => {
        res.json({
            success: true,
            data: {
                nickname: "Prawira [NavyStore]",
                zoneId: zoneId || ""
            }
        });
    }, 400);
});

// Endpoint Simulasi Transaksi (Game, Pulsa, Token Listrik)
app.post('/api/v1/transaction/create', (req, res) => {
    const { productName, targetId, paymentMethod } = req.body;
    const invoiceId = 'INV-' + Date.now();

    res.json({
        success: true,
        message: 'Pesanan berhasil dibuat, silakan lakukan pembayaran.',
        data: {
            invoiceId,
            productName,
            targetId,
            paymentMethod,
            status: "MENUNGGU PEMBAYARAN"
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend Server berjalan di port ${PORT}`);
});