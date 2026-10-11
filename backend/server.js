const express = require('express');
const cors = require('cors');
const fs = require('node:fs');
const path = require('node:path');
const app = express();
const transactions = new Map();
const reviewsFile = path.join(__dirname, 'data', 'reviews.json');
let transactionSequence = 0;

let reviews;
try {
    reviews = JSON.parse(fs.readFileSync(reviewsFile, 'utf8'));
    if (!Array.isArray(reviews)) {
        throw new Error('File ulasan harus berisi array JSON.');
    }
} catch (error) {
    if (error.code !== 'ENOENT') throw error;
    fs.mkdirSync(path.dirname(reviewsFile), { recursive: true });
    fs.writeFileSync(reviewsFile, '[]\n', 'utf8');
    reviews = [];
}

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
    const { productName, targetId, paymentMethod, amount } = req.body;
    const supportedPaymentMethods = ['QRIS', 'DANA', 'GoPay', 'OVO', 'ShopeePay'];

    if (typeof productName !== 'string' || !productName.trim() ||
        typeof targetId !== 'string' || !targetId.trim() ||
        !supportedPaymentMethods.includes(paymentMethod) ||
        !Number.isSafeInteger(amount) || amount < 0) {
        return res.status(400).json({
            success: false,
            message: 'Nama produk, tujuan, metode pembayaran, dan total harga yang valid wajib diisi.'
        });
    }

    const invoiceId = `SIM-${Date.now()}-${++transactionSequence}`;
    const transaction = {
        invoiceId,
        productName: productName.trim(),
        targetId: targetId.trim(),
        paymentMethod,
        amount,
        status: 'SIMULASI',
        createdAt: new Date().toISOString()
    };
    transactions.set(invoiceId, transaction);

    res.status(201).json({
        success: true,
        message: 'Pesanan simulasi tercatat. Pembayaran dan pengiriman produk belum diproses.',
        data: transaction
    });
});

app.get('/api/v1/transaction/:invoiceId', (req, res) => {
    const transaction = transactions.get(req.params.invoiceId);
    if (!transaction) {
        return res.status(404).json({ success: false, message: 'Transaksi tidak ditemukan.' });
    }
    res.json({ success: true, data: transaction });
});

app.get('/api/v1/reviews', (req, res) => {
    res.json({ success: true, data: reviews.slice(0, 100) });
});

app.post('/api/v1/reviews', (req, res) => {
    const { invoiceId, rating, comment } = req.body;
    if (typeof invoiceId !== 'string' || !/^SIM-\d+-\d+$/.test(invoiceId) ||
        !Number.isInteger(rating) || rating < 1 || rating > 5 ||
        typeof comment !== 'string' || comment.length > 500) {
        return res.status(400).json({
            success: false,
            message: 'Invoice, rating bintang 1–5, dan komentar maksimal 500 karakter wajib valid.'
        });
    }
    if (reviews.some((review) => review.invoiceId === invoiceId)) {
        return res.status(409).json({ success: false, message: 'Ulasan untuk transaksi ini sudah dikirim.' });
    }

    const review = {
        id: `${Date.now()}-${reviews.length + 1}`,
        invoiceId,
        rating,
        comment: comment.trim(),
        createdAt: new Date().toISOString()
    };
    const updatedReviews = [review, ...reviews].slice(0, 500);
    const temporaryFile = `${reviewsFile}.tmp`;
    try {
        fs.writeFileSync(temporaryFile, `${JSON.stringify(updatedReviews, null, 2)}\n`, 'utf8');
        fs.renameSync(temporaryFile, reviewsFile);
    } catch (error) {
        console.error('Gagal menyimpan ulasan:', error);
        return res.status(500).json({ success: false, message: 'Ulasan gagal disimpan. Silakan coba lagi.' });
    }
    reviews = updatedReviews;

    res.status(201).json({ success: true, data: review });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend Server berjalan di port ${PORT}`);
});