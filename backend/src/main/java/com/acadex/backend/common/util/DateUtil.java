package com.acadex.backend.common.util;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

public class DateUtil {
	
	private static final DateTimeFormatter DATE_TIME_FORMAT =
            DateTimeFormatter.ofPattern("MM-dd-yyyy HH:mm:ss");

    // Using Instant (best for backend / microservices)
    public static String formatDateTime(Instant timestamp) {
        LocalDateTime dateTime = timestamp.atZone(ZoneId.systemDefault()).toLocalDateTime();
        return dateTime.format(DATE_TIME_FORMAT);
    }

    // Using epoch millis
    public static String formatDateTime(long millis) {
        LocalDateTime dateTime = Instant.ofEpochMilli(millis)
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();
        return dateTime.format(DATE_TIME_FORMAT);
    }

    // Current timestamp
    public static Timestamp now() {
        Timestamp ts = new Timestamp(System.currentTimeMillis());
        ts.setNanos(0); // 👈 removes milliseconds
        return ts;
    }
}
